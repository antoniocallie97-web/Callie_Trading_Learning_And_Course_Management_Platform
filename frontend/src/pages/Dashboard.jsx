import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };


  const stats = [
    ["Courses Enrolled", "5"],
    ["Lessons Completed", "42"],
    ["Certificates", "3"],
    ["Progress", "76%"]
  ];


  const candles = [
    {left:"8%", top:"30%", color:"bg-emerald-400", wick:"h-32", body:"h-20"},
    {left:"20%", top:"20%", color:"bg-red-500", wick:"h-44", body:"h-28"},
    {left:"35%", top:"40%", color:"bg-emerald-400", wick:"h-28", body:"h-16"},
    {left:"50%", top:"25%", color:"bg-red-500", wick:"h-52", body:"h-32"},
    {left:"65%", top:"35%", color:"bg-emerald-400", wick:"h-36", body:"h-22"},
    {left:"78%", top:"18%", color:"bg-red-500", wick:"h-40", body:"h-25"},
    {left:"90%", top:"38%", color:"bg-emerald-400", wick:"h-30", body:"h-18"},
  ];


  return (

<div className="
relative 
min-h-screen 
overflow-hidden 
bg-gradient-to-br 
from-slate-950 
via-slate-900 
to-black 
text-white
">


{/* Background Glow */}

<div className="absolute inset-0 z-0">

<div className="
absolute 
-top-40 
-left-40 
w-[500px] 
h-[500px] 
rounded-full 
bg-amber-400/20 
blur-[150px]
">
</div>


<div className="
absolute 
top-20 
right-0 
w-[450px] 
h-[450px] 
rounded-full 
bg-yellow-300/10 
blur-[150px]
">
</div>

</div>




{/* Trading Grid */}

<div className="
absolute 
inset-0 
z-0 
opacity-20

bg-[linear-gradient(rgba(251,191,36,.5)_1px,transparent_1px),
linear-gradient(90deg,rgba(251,191,36,.5)_1px,transparent_1px)]

bg-[size:70px_70px]
">
</div>




{/* Candlestick Chart Background */}

<div className="
absolute 
inset-0 
z-0 
opacity-20
pointer-events-none
">


{
candles.map((c,index)=>(

<div
key={index}
className="absolute flex flex-col items-center animate-pulse"
style={{
left:c.left,
top:c.top
}}
>


{/* Wick */}

<div 
className={`
w-[3px]
${c.wick}
${c.color}
`}
>
</div>


{/* Candle body */}

<div
className={`
w-5
${c.body}
${c.color}
rounded-sm
`}
>
</div>


</div>

))
}


</div>





{/* Main Content */}

<div className="relative z-10">



{/* Navbar */}

<nav className="
border-b 
border-amber-400/20
backdrop-blur-xl
bg-slate-950/70
">


<div className="
max-w-7xl
mx-auto
flex
justify-between
items-center
px-8
py-5
">


<h1 className="
text-3xl
font-black
text-amber-400
">
CALLIE
</h1>


<div className="flex items-center gap-6">


<span>
Welcome, 
<b className="text-amber-300 ml-2">
{user?.username || "Student"}
</b>
</span>


<button

onClick={logout}

className="
px-5
py-2
rounded-xl
bg-gradient-to-r
from-amber-400
to-yellow-500
text-slate-900
font-bold
hover:scale-105
transition
"

>
Logout
</button>


</div>

</div>

</nav>





<main className="
max-w-7xl
mx-auto
px-8
py-12
">





{/* Welcome Card */}

<div className="
rounded-3xl
bg-slate-900/50
backdrop-blur-xl
border
border-amber-400/20
p-10
shadow-[0_20px_80px_rgba(251,191,36,.15)]
">


<h2 className="
text-5xl
font-black
">
Welcome Back 👋
</h2>


<p className="
mt-4
text-gray-300
text-lg
">
Continue your trading journey and improve your market skills.
</p>


</div>







{/* Stats */}

<div className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-6
mt-10
">


{
stats.map((s)=>(

<div

key={s[0]}

className="
rounded-3xl
bg-slate-900/50
backdrop-blur-xl
border
border-amber-400/20
p-6
hover:-translate-y-2
transition
"

>


<p className="text-gray-400">
{s[0]}
</p>


<h3 className="
mt-3
text-5xl
font-black
text-amber-400
">
{s[1]}
</h3>


</div>


))

}


</div>







{/* Quick Actions */}

<h2 className="
text-3xl
font-bold
mt-14
mb-6
text-amber-300
">
Quick Actions
</h2>



<div className="
grid
md:grid-cols-3
gap-6
">


{
[
["📚","Browse Courses","/courses"],
["👤","My Profile","/profile"],
["📈","Learning Progress","/dashboard"]

].map(i=>(


<Link

key={i[1]}

to={i[2]}

className="
rounded-3xl
bg-slate-900/50
backdrop-blur-xl
border
border-amber-400/20
p-8
hover:-translate-y-2
transition
"


>


<div className="text-5xl">
{i[0]}
</div>


<h3 className="
text-2xl
font-bold
mt-4
">
{i[1]}
</h3>


</Link>


))

}


</div>








{/* Continue Learning */}


<div className="
rounded-3xl
bg-slate-900/50
backdrop-blur-xl
border
border-amber-400/20
p-8
mt-12
">


<h2 className="
text-3xl
font-bold
text-amber-300
">
Continue Learning
</h2>


<p className="mt-4">
Forex Trading Masterclass - Lesson 12 of 25
</p>



<div className="
w-full
h-3
bg-slate-700
rounded-full
mt-6
">


<div className="
h-3
w-[48%]
rounded-full
bg-gradient-to-r
from-amber-400
to-yellow-500
">
</div>


</div>




<button

className="
mt-8
px-8
py-3
rounded-xl
bg-gradient-to-r
from-amber-400
to-yellow-500
text-slate-900
font-bold
hover:scale-105
transition
"

>

Resume Course

</button>



</div>



</main>


</div>


</div>

  );
}