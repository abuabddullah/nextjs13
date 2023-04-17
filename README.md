> basic nextjs13 tutorial 1 to 6 noted down by following this project. so its important to keep this project saved to understand tutorial 1 to 6

# Installation and Folder Structure Demystified

##### nextjs একটি serverside rendering framwork অর্থাৎ নরমালি console.log করলে তা terminal এ দেখাবে browser এ দেখাবে আর react এর বিভিন্ন hooks use করলে error দিবে কিন্তু যদি আমরা "use client" key অথবা অন্যান্য কিছু technic use করি তাহলে আর error দিবেনা

```http
command: npx create-next-app

What is your project named? » mynextapptutorial
Would you like to use TypeScript with this project? » No
Would you like to use ESLint with this project? » Yes
Would you like to use `src/` directory with this project? » No
Would you like to use experimental `app/` directory with this project? » Yes
What import alias would you like configured? » @/*


command: npm run dev

```

> > nextjs এ install করার পরে আমরা অনেক অনেক files দেখতে পারব তবে তাদের মাঝে **_next.config.js_** সব থেকে গুরুত্বপুর্ন কারন এর মাঝেই আমরা **env-var,hosting info** etc keep করতে পারি
>
> > আর default styl হিসেবে body তে কিছু css আছে তা নিজের সুবিধা মত মুছে দিতে হবে

### Introductions to the folders and files installed

> > **app** folder হচ্ছে আমাদের next app এর **root folder** অনেকটা **rect এর src** folder এর মত
>
> > react এ সাথে যদি তুলনা করি তাহলে,
> >
> > > react এর index.js == app/layout.js
> >
> > > react এর Load.js component == app/loading.js
> >
> > > react এর App.js == app/page.js তবে এ typescript এর কিছু আলামত আছে আর **import React from 'react'** জিনিসটা নাই। manually আনতে হবে
> >
> > > react এ routing এর জন্য আগে একটা component বানাতে হত তারপর App.js এর মাঝে routing define করতে হত কিন্তু nextJs এ component এর নামে folder বানাতে হয় আর তার ভিতরে **page.js** file এ সেই component এর নামে function বানাতে হয়
>
> > **head.js** হচ্ছে একটা component যার মাঝে **title,meta,link** etc html tags গুলো থাকে
>
> > **layout.js** automatically **page.js** কে **children** হিসেবে পাবে আর সেই **children** কে body tag এ মুরিয়ে দিবে।
> >
> > > যদিও আমরা চাই body এর **children** এর আগে সুবিধা মত nav, or header tag use করতে পারি যা commonly সব componnet এ access পাবে
>
> > **error.js** হচ্ছে কোন error থাকলে এই component এর কাছে চলে যাবে
> >
> > > must be used "use client" key at the start or it will give erro
>
> > কোন file থেকে conditionally আমরা **not-found.js** page এ routing করাতে পারি **_notFound()_** function use করে

# Next.js Routing: Linking and Navigating

### Normal Routing

##### react এ routing এর জন্য আগে একটা component বানাতে হত তারপর App.js এর মাঝে routing define করতে হত কিন্তু nextJs এ component এর নামে folder বানাতে হয় আর তার ভিতরে page.js file এ সেই component এর নামে function বানাতে হয়। এছাড়া page.js এর সাথে সাথে component টার জন্য নিজস্ব চাইলে basic "hellano" files গুলোও বানাতে পারব তবে যদি না বানাই তাহলে তা automatically immidiate parent folder এ থাকা "hellano" files গুলোর access পেয়ে যাবে

> "hellano" files stands for
>
> > **h - _head.js_**
>
> > **e - _error.js_**
>
> > **l - _loading.js_**
>
> > **la - _layout.js_**
>
> > **no - _not-found.js_**

### Dynamic Routing

> > যদি আমরা চাই user **http://localhost:3000/products/a35sd4fa65s4df6546** এরকম কোন link এ ঢুকবে যেখানে **_a35sd4fa65s4df6546_** হচ্ছে কোন click করা product এর _*id*_ তাহলে আমাদের **app\products\[id]\page.js** file create করতে হবে। যেখনে,
> >
> > > **page.js** file **{params}** props recieve করবে আর যার ভিতরে **params.id==_a35sd4fa65s4df6546_**

### Linking or anchoroing

```http
path: components\shared\Navbar.js
"""""""""""""""""""""""""""""""""""
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <Link href={'/'}>Home</Link>{' '}
        <Link href={'/about'}>About</Link>
    </div>
  )
}

export default Navbar

```

# ServerSideRendering vs clientSideRendering

### using clientside into serverside

##### nextjs এ মূলত প্রাথমিকভাবে সব component ই serverside component হয়ে থাকে অর্থাৎ যদি console.log করা হয় তাহলে তা browser এ দেখাবে না, react এর hooks গুলো use করতে পারব না etc. কিন্তু কোন component declaring এর আগে যদি উপরে "use client" লিখে দেই তাহলে সেই component কিন্তু clientside component হয়ে যাবে। তবে এখন কথা হচ্ছে nextjs কিন্তু চায় যাতে বেশি থেকে বেশি serverside component ই থাকে তাহলে যদি আমাদের clientside component লাগে তা কিভাবে তা আমরা handle করব?

> > প্রথমত চেষ্টা করব কোন একটা component declaring এর সময় কেবল যেই অংশটা clinetside না হলেই নয় কেবল সেটা তেই **"use client"** লিখা,
> >
> > > যেমন **Navbar** component এ কিছু **Link** আছে ও একটা **input** field আছে। এখন এই **input** field এর কাজটা কিন্তু clientside বা browser related অনেক **console.log** এর জিনিস থাকে । তাই পুরো **Navbar** component এ **"use client"** না লিখে বরং extra করে **input** field এর জন্য আলাদা একটা **"use client"** component(NavSearchBox.js) বানাব

### using serverside into clientside

##### আমরা চাইলেই কিন্তু কোন "use client" লিখা clientside component এ টুস করেই কোন serverside component কে নিয়ে এসে রেখে দিতে পারি এবং nextjs এতে কোন error ও দিবে না। কিন্তু nextjs by default এই practice কে encourage করে না সে একটা specail & হিজিবিজি style এ এই কাজটা করাতে চাই। সে system টা আসলে কি?

> প্রথমে যেই route এ আমরা এই কাজটা করতে চাই **app** folder এই নামের folder বানাব like here is **_contact_**,
>
> > প্রথমত, যদিও **_contact_** folder এর defautl file **_page.js_** লাগবে তবে এখানে আমরা আরোএকটা file নিব **Contact.js** নামের যেটা হবে clientside component। এখানে আমরা automatically একটা **_{children}_** recive করব যেটাই মূলত আমাদের সেই কাংক্ষিত **serverside component** । আর এখন আমার requirement অনুযায়ী **serverside component** কে use করে **clientside component** টা create করব
>
> > দ্বীতিয়ত, এবার **_page.js_** file এ একতা serverside functional component বানাব **index** নামের । তারপর সেখানে আগের বানানো **Contact.js** এবং কাংক্ষিত সেই **serverside component** কে import করব এবং **_Contact_** এর ভিতরে সেই **serverside component** কে wrap করে দিব নিচের মত
> >
> > > এবং আমরা চাইলে wrapping এর সময় আমাদের requirement অনুযায়ী props drilling ও করতে পারি তবে কোন **_functions, Dates_** props drilling করা যাবে না।

```http
path: app\contact\page.js
"""""""""""""""""""""""

import React from 'react'
import Server2Client from '@/components/sercerSide/Server2Client'
import Contact from './Contact'

const index = () => {
  return (
    <Contact myProps={"value"}>
        <Server2Client/>
    </Contact>
  )
}

export default index

```

### using clientside dependincies packages in nextjs

##### যেহেতু nextjs serverside rendering prefer করে তাই যেই সব package গুলো আমরা clientside এর জন্য use করব কিংবা যেই সব package গুলো use করতে by default react hooks কিংবা এরকম কিছু clientside জিনিস পত্র লাগে তা সরাসরি nextjs এ use করতে পারব না বরং নিচের ছবির মত গুরিয়ে পেচিয়ে use করতে হবে

> অর্থাৎ,
>
> > প্রথমে packege কে একতা **"use client"** file এ import করে সেখান থেকে export করে দাও
>
> > তারপরে যেখানে খুশি use কর

<img src="https://i.ibb.co/D16CCm1/clientside-dependencies.png" width=100%>

# Backend in Nextjs13

##### nextjs এ backend এর access pathway হচ্ছে api folder ভিতরের fileName অনুযায়ী অর্থাৎ এখানে **_api/hello.js_** file এর জন্য url হচ্ছে http://localhost:3000/api/hello অথবা **_api/product/getallproduct.js_** এর জন্য url হচ্ছে http://localhost:3000/api/product/getallproduct

## install "mongoose"

> > nextjs এ backend এ api requests (get/post/put/delete) এর জন্য আমরা **_mongoose_** install করব

```http
path: mynexttuttor
"""""""""""""""

npm i mongoose

```
