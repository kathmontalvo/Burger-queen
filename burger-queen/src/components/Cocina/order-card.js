import React, {useState, useEffect} from 'react'
const OrderCard = ({ order }) => {
  const productsArr = order.products
  const [timer, setTimer] = useState(null);
  const [seconds, setSeconds] = useState('00')
  const [minutes, setMinutes] = useState('00')
  const [active, setActive] = useState(true);

  useEffect(()=>{
    // let interval = null;
    if(active){
    let timer = setInterval(()=>{
        let num = Number((seconds +1)).toString(),
        count = minutes;
      if(Number(seconds) === 59) {
          count = (Number(minutes+ 1)).toString();
          num = '00';
        }
        setMinutes(
          count.length === 1 ? '0' + count : count
        )
        setSeconds(
          num.length === 1 ? '0' + num : num
        )
        // setTimer(timer=>timer+1)
      }, 1000)
      setTimer(timer)
    }else if (!active && timer !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [active, timer, seconds, minutes])

  return (
    <div className="col-sm-6 mt-3">
      <div className="card" >
        <div className="card-header d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <div className="border-card-right pr-2">{order._id}</div>
          <div className="pl-2">{order.client}</div>
        </div>
        <div>{timer}</div>
        </div>
        <div className="card-body">
        <ul className="list-group">
        {productsArr.map((el) => (
            <li className="list-group-item" key={el.product}>
              <input type="checkbox" /> {el.qty} unid. {el.product}  
            </li>
          ))}
        </ul>
        </div>
        <div className="card-footer">
          <button onClick={()=>setActive(false)} className="btn card-footer-btn w-100">Done</button>
        </div>
      </div>
    </div>
  )
}

export default OrderCard