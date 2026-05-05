*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:'Segoe UI',sans-serif;
}

body{
  background:linear-gradient(270deg,#0f172a,#1e3a8a,#9333ea);
  background-size:600% 600%;
  animation:bgMove 10s infinite;
  color:white;
}

/* Background Animation */
@keyframes bgMove{
  0%{background-position:0% 50%;}
  50%{background-position:100% 50%;}
  100%{background-position:0% 50%;}
}

/* Navbar */
.navbar{
  display:flex;
  justify-content:space-between;
  padding:20px 50px;
}

/* Hero */
.hero{
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
}

/* Glass effect */
.glass{
  background:rgba(255,255,255,0.1);
  padding:40px;
  border-radius:20px;
  backdrop-filter:blur(10px);
  text-align:center;
}

.glass h1{
  font-size:3rem;
}

.glass button{
  margin-top:20px;
  padding:12px 30px;
  border:none;
  border-radius:30px;
  background:#6366f1;
  color:white;
  cursor:pointer;
  transition:0.3s;
}

.glass button:hover{
  transform:scale(1.1);
}

/* Features */
.features{
  padding:60px;
  text-align:center;
}

.feature-box{
  display:flex;
  justify-content:center;
  gap:20px;
  margin-top:30px;
}

.card{
  padding:20px;
  border-radius:15px;
  background:rgba(255,255,255,0.1);
  transition:0.3s;
}

.card:hover{
  transform:translateY(-10px);
}

/* Pricing */
.pricing{
  padding:60px;
  text-align:center;
}

.pricing-box{
  display:flex;
  justify-content:center;
  gap:20px;
}

.price-card{
  padding:30px;
  border-radius:15px;
  background:rgba(255,255,255,0.1);
  transition:0.3s;
}

.price-card:hover{
  transform:scale(1.1);
}

.premium{
  background:linear-gradient(135deg,#6366f1,#a855f7);
}

/* Scroll Animation */
.reveal{
  opacity:0;
  transform:translateY(50px);
  transition:1s;
}

.reveal.active{
  opacity:1;
  transform:translateY(0);
}

/* Fade animation */
.fade{
  animation:fadeIn 2s ease-in;
}

@keyframes fadeIn{
  from{opacity:0;}
  to{opacity:1;}
}

/* Responsive */
@media(max-width:768px){
  .feature-box,.pricing-box{
    flex-direction:column;
  }
}
