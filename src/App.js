
import './App.css';
import Card from './Card.js';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  let pricetag = [
    {
      title : 'Free',
      price : 0,
      features : [
        {
          name :"Single User",
          isEnable :true 
        },
        {
          name :"5GB Storgae",
          isEnable :true 
        },  
        {
          name :"Unlimited Public Projects",
          isEnable :true 
        },
        {
          name :"Community Access",
          isEnable :true 
        },
        {
          name :"Unlimited Private Projects",
          isEnable :false
        },
         {
          name :"Dedicated Phone Suppor",
          isEnable :false
        },
        {
          name :"Free Subdomain",
          isEnable :false
        },
        {
          name :"Monthly Status Reports",
          isEnable :false
        },
      ]
    },
    {
      title : 'Plus',
      price : 29,
      features : [
        {
          name :"5 User",
          isEnable :true
        },
        {
          name :"50GB Storage",
          isEnable :true
        },
        {
          name :"Unlimited Public Projects",
          isEnable :true
        },
        {
          name :"Community Access",
          isEnable :true
        },
        {
          name :"Unlimited Private Projects",
          isEnable :true
        },
        {
          name :"Dedicated Phone Support",
          isEnable :true
        },
        {
          name :"Free Subdomain",
          isEnable :true
        },
        {
          name :"Monthly Status Reports",
          isEnable :false
        },
      ]
    },
    {
      title : 'Pro',
      price : 49,
      features : [
        {
          name :"Unlimited Users",
          isEnable :true
        },
        {
          name :"150GB Storage",
          isEnable :true
        },
        {
          name :"Unlimited Public Projects",
          isEnable :true
        },
        {
          name :"Community Access",
          isEnable :true
        },
        {
          name :"Unlimited Private Projects",
          isEnable :true
        },
        {
          name :"Dedicated Phone Support",
          isEnable :true
        },
        {
          name :"Unlimited Free Subdomain",
          isEnable :true
        },
        {
          name :"Monthly Status Reports",
          isEnable :true
        },
      ]
    },
  ]
 return (
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
      
{
  pricetag.map((tag) =>{
    return <Card data={tag}></Card>
  })
}

    </div>
    </div>
    </section>

 );
}

export default App;
