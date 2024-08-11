import './JobItem.css';
import tastimage from "../../assets/images/photosnap.svg";
function JobItem ({eachjob}) {
    const qulifiedArray = [...eachjob.languages, ...eachjob.tools];
   return (
    <div className='jobItem' style={eachjob.new == true ? { borderleft:"solid 2px green" } :null}>
        <img src={eachjob.logo}/>
        <div className='jobInfo'>
            <div className='firstRowInfo'>
                <label className='companyName'>{eachjob.company}</label>
                {eachjob.new == true ?<label className='newlabel'>NEW!  </label>:null }
                {eachjob.featured == true ?<label className='featuredlabal'>FEATURED </label> :null }
                
            </div>
            <p className='position'>{eachjob.position}</p>
            <ul className='lastRowInfo'>
                <li>{eachjob.postedAt} </li>
                <li>{eachjob.contract} </li>
                <li>{eachjob.location} </li> 
            </ul>
        </div>
        <div className='qulified'>
            {qulifiedArray.map((name,index) =>{
                return <button className="btn btn1" key={index}>{name}</button>;
            })}
        
        </div>
    </div>
   );
}


 export default JobItem;