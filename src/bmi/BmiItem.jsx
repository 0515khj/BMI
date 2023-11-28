
const BmiItem = ({item,Del,onEdit}) => {
    const {height, name,weight,id} = item  
    

  

 const pigbmi = () => {
    if (height && weight) {
      const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
      return bmi;
    }
    return null;
  };


  const pigresult = (bmi) => {
    if (bmi === null) {
      return "BMI 계산 중";
    } else if (bmi < 18.5) {
      return "저체중";
    } else if (bmi < 24.9) {
      return "정상";
    } else if (bmi < 29.9) {
      return "과체중";
    } else {
      return "비만";
    }
  };

  const bmi = pigbmi();
  const bmisum = pigresult(bmi);

  const onSubmit = (e) => {
    e.preventDefault();
  };

   
    return (
        <li onSubmit={onSubmit}>
            <strong>{height}</strong>
            <strong>{weight}</strong>
            <strong>{name}</strong>
            <strong>{bmisum}</strong>
            <strong>
            <button type="submit" onClick={()=>onEdit(id)}><i className="xi-pen"></i></button>
            <button  onClick={()=>Del(id)}><i className="xi-trash"></i></button>
            </strong>
        </li>
        
    );
};

export default BmiItem;