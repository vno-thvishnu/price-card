function Card({data}){
    return (    
    <div class="col-lg-4">
    <div class="card mb-5 mb-lg-0">
      <div class="card-body">
        <h5 class="card-title text-muted text-uppercase text-center">
            {data.title}
        </h5>
        <h6 class="card-price text-center">
            ${data.price}<span class="period">/month</span></h6>
        <hr/>
        <ul class="fa-ul">
          {
            data.features.map((list) =>{
                return <li className={list.isEnable ?'' : 'text-muted'}>
                  
                     <span class="fa-li">
                        <i class="fas fa-check"></i>
                        </span> 
                        {list.name}
                        </li>
            })
          }
         
        </ul>
        <div class="d-grid">
          <a href="#" class="btn btn-primary text-uppercase">Button</a>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Card;
