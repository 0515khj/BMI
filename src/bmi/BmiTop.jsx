
const MoTop = ({cpcp}) => {
    return (
        <div>
            <h1>BMI 체크</h1>

<select onClick={cpcp}>
<option value="">==정렬==</option>
<option value="height">키</option>
<option value="weight">몸무게</option>
<option value="name">이름</option>
</select>
        </div>
    );
};

export default MoTop;