
const BmiForm = ({onSubmit,Mo,ref,edit,cp}) => {
    const {height, name,weight} = Mo

    

    return (
        <div className="box con1">
            <form onSubmit={onSubmit}>
                <p>
                    <label htmlFor="" >키</label>
                    <input type="number" value={height} name="height" onChange={cp} ref={ref}
                    placeholder="키를 입력해주세요."/>
                </p>
                <p>
                    <label htmlFor="">몸무게</label>
                    <input type="number" value={weight} name="weight" onChange={cp} ref={ref}
                    placeholder="몸무게를 입력해주세요."/>
                </p>
                <p>
                    <label htmlFor="" >이름</label>
                    <input type="text" value={name} name="name" onChange={cp} ref={ref} 
                    placeholder="이름을 입력해주세요."/>
                </p>
              
                <p>
                    <button type="submit">
                     {
                        edit ? '수정':'나의 체중은?'
                     }
                    </button>
                </p>
            </form>
        </div>
    );
};

export default BmiForm;