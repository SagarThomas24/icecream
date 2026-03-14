import { useState, useEffect } from "react"
import confetti from "canvas-confetti"
import { motion } from "framer-motion"
import "./App.css"

function App() {

  const params = new URLSearchParams(window.location.search)
  const [opacity,setOpacity] = useState(1)
  const flavorIcons = {
    "🍨 White Chocolate": "🍦🤍",
    "🍫 Dark Chocolate": "🍦🍫",
    "🍪 Cookies & Cream": "🍦🍪",
    "🥜 Almond Butter": "🍦🥜",
    "🍫 Death by Chocolate": "🍦🍫🍫",
    "🍦 Vanilla": "🍦"
}
  const nameParam = params.get("name")
  const flavorParam = params.get("flavor")
  const msgParam = params.get("msg")

  const [name,setName]=useState("")
  const [msg,setMsg]=useState("")
  const [flavor,setFlavor]=useState("🍦")

  useEffect(()=>{

    if(nameParam){

      confetti({
        particleCount:200,
        spread:120
      })

    }

  },[])

  if(nameParam){

    return(

      <div className="giftPage">

      <motion.div
      className="glassCard"
      initial={{scale:0.85, opacity:0}}
      animate={{scale:1, opacity:1}}
      transition={{duration:0.4}}
      >

      <h1>🍦 Ice Cream Delivery</h1>

      <h2>For {nameParam} ❤️</h2>

      <motion.div
      className="icecreamWrapper"
      animate={{y:[0,-15,0]}}
      transition={{repeat:Infinity,duration:2}}
      onClick={()=>confetti({particleCount:80,spread:80})}
      >

      <div className="icecream" style={{opacity: opacity}}>{flavorIcons[flavorParam]}</div>

      <div className="drip"></div>


      </motion.div>
      <button
      className="lickButton"
      onClick={()=>{
          const newOpacity = Math.max(opacity - 0.2,0)
          setOpacity(newOpacity)

          if(newOpacity === 0){
            alert("😋 You finished the ice cream! ")
            alert("😄 Bill paid by Sagar Thomas 😎")
            alert("😊 You're welcome!!!!! 😌")
          }
        }}
      disabled={opacity <= 0}
      >
      👅 Lick Ice Cream
      </button>

      <p>{msgParam}</p>

      </motion.div>

      </div>

    )

  }

  const generateLink=()=>{

    const url=window.location.origin+
    `?name=${encodeURIComponent(name)}&flavor=${encodeURIComponent(flavor)}&msg=${encodeURIComponent(msg)}`

    window.location.href=url

  }

  return(

    <div className="creator">

      <div className="glassCard">

      <h1>Send a Virtual Ice Cream 🍦</h1>

      <input
      placeholder="Your name"
      onChange={(e)=>setName(e.target.value)}
      />

      <textarea
      placeholder="A message the the thoughtful person who gave u this iceCream"
      onChange={(e)=>setMsg(e.target.value)}
      />

 <div className="flavors">

<label className="flavorOption">
<input
type="radio"
name="flavor"
value="🍨 White Chocolate"
onChange={(e)=>setFlavor(e.target.value)}
/>
🍨 White Chocolate
</label>

<label className="flavorOption">
<input
type="radio"
name="flavor"
value="🍫 Dark Chocolate"
onChange={(e)=>setFlavor(e.target.value)}
/>
🍫 Dark Chocolate
</label>

<label className="flavorOption">
<input
type="radio"
name="flavor"
value="🍪 Cookies & Cream"
onChange={(e)=>setFlavor(e.target.value)}
/>
🍪 Cookies & Cream
</label>

<label className="flavorOption">
<input
type="radio"
name="flavor"
value="🥜 Almond Butter"
onChange={(e)=>setFlavor(e.target.value)}
/>
🥜 Almond Butter
</label>

<label className="flavorOption">
<input
type="radio"
name="flavor"
value="🍫 Death by Chocolate"
onChange={(e)=>setFlavor(e.target.value)}
/>
🍫 Death by Chocolate
</label>

<label className="flavorOption">
<input
type="radio"
name="flavor"
value="🍦 Vanilla"
onChange={(e)=>setFlavor(e.target.value)}
/>
🍦 Vanilla
</label>

</div>
      <button onClick={generateLink}>
        Create Ice Cream 
      </button>

      </div>

    </div>

  )

}

export default App