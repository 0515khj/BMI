import BmiItem from "./BmiItem";



const BmiList = ({data , Del ,onEdit}) => {

    return (
        <div className="con2">
            <p>
                <span >키</span>
                <span >몸무게</span>
                <span >이름</span>
                <span >결과</span>
                <span >관리</span>
            </p>        
            <ul className="list">
               {data.map((item)=>(<BmiItem key={item.id} item={item} Del={Del} onEdit={onEdit}
                   />))}
            </ul>
        </div>
    );
};

export default BmiList;