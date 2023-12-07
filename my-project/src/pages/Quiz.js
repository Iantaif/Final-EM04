import React, { useState } from 'react';
import '../css/Quiz.css'



const questions = [
    {
        id: 1,
        question: 'Hứng thú với công việc tuân theo một bộ quy tắc, thực hiện nhiệm vụ được giao.',
      },
      {
        id: 2,

        question: 'Hứng thú với việc lập trình, bảo trì và cung cấp hỗ trợ cho phần mềm hoặc phần cứng của các thiết bị máy tính.',
      },
      {
        id: 3,

        question: 'Hứng thú với các dự án mạo hiểm, chấp nhận rủi ro.',
      },
      // Thêm các câu hỏi tiếp theo tương tự
      {
        id: 4,

        question: 'Hứng thú với công việc tuân theo một bộ quy tắc, thực hiện nhiệm vụ được giao.',
      },
      {
        id: 5,

        question: 'Hứng thú với việc lập trình, bảo trì và cung cấp hỗ trợ cho phần mềm hoặc phần cứng của các thiết bị máy tính.',
      },
      {
        id: 6,

        question: 'Hứng thú với các dự án mạo hiểm, chấp nhận rủi ro.',
      },
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [result, setResult] = useState('');

  const loadQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];

    const handleSliderChange = (event) => {
      const value = parseInt(event.target.value, 10);
      setSelectedOption(value);
  
      // Thay đổi giá trị hiển thị ngay trên màn hình
      document.getElementById('sliderValue').textContent = value;
    };
  
    return (
      <div>
        <h1 className="text-black text-[32px] font-extrabold font-['Dela Gothic One'] leading-loose">Quiz #{currentQuestion.id}</h1>
        <div className="w-[510px] h-[81px] bg-zinc-100 rounded-lg justify-center flex items-center " >
        <p>{currentQuestion.question}</p>
        </div>
        <div className="options">
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={selectedOption}
            onChange={handleSliderChange}
          />
        </div>
        <p id="sliderValue" className="text- text-[24px] font-bold font-['Dela Gothic One'] leading-loose">{selectedOption}</p>
      </div>
    );
  };
  

  const submitAnswer = () => {
    if (selectedOption) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption('');
      } else {
        setResult(`${result} - Hoàn thành!`);
        window.location.href = '/afterquiz';
      }
    } else {
      alert('Vui lòng chọn một trong 5 lựa chọn.');
    }
  };

  return (
    <div className="App flex flex-col justify-center items-center">
      {loadQuestion()}
      <div className=" w-32 py-1.5 bg-sky-700 rounded-[100px] hover:bg-red-700 duration-200">
      <button onClick={submitAnswer} className="text-white text-base font-bold font-['Montserrat'] leading-none ">Continue</button>
      </div>
      <p className='pb-10'>{result}</p>
      <div className="w-[800px] h-[150px]  bg-white rounded-[14px] shadow justify-start items-center  inline-flex">
  <div className="grow shrink basis-0 flex-col justify-start items-start  inline-flex">
    <div className="self-stretch h-[90px] flex-col justify-start items-start  flex">
      <div className="self-stretch text-black text-[32px] font-bold font-['Dela Gothic One'] leading-loose">Guildline</div>
      <div className="self-stretch text-neutral-500 text-base font-semibold font-['Montserrat'] leading-snug">Từ 1-5 hãy chọn theo từ ít hứng thú đến hứng thú nhất</div>
    </div>
    
  </div>
</div>
    </div>
    
  );
}

export default App;
