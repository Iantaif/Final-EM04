import React from 'react';
import iamge54 from '../images/image54.png';
import about from '../css/about.css';
import abouts2 from '../images/abouts2.png';
import abouts3 from '../images/abouts3.png';


const AboutUs = () => {
  return (
    <div class=" flex flex-col justify-center items-center gap-10	">
    <div class='flex items-center justify-center border-solid border-1 rounded-2xl drop-shadow-2xl p-5 bg-white	max-w-4xl mt-10 	'>
    <div class="image54" style={{ backgroundImage: `url(${iamge54})` }}></div>
    <div class="frame20 flex ">
      <div class="frame18 ml-8">
        <div class="frame23 inline-block">
          <div class=" flex">
          <div class="leThiQuynhNhu font-black">Le Thi Quynh Nhu</div>
          <div class=" frame40 ml-2">
            <button class="github"> github</button>
          </div>
          </div>
        </div>
        <div className="madeDesignApiQueriesStatistics">
          Made design, api queries, statistics, sprint game, did some layout and supervised development.
        </div>
      </div>
    </div>
    </div>

    <div class='flex items-center justify-center border-solid border-1 rounded-2xl drop-shadow-2xl p-5 bg-white	max-w-4xl	'>
    <div class="image54" style={{ backgroundImage: `url(${abouts2})` }}></div>
    <div class="frame20 flex ">
      <div class="frame18 ml-8">
        <div class="frame23 inline-block">
          <div class=" flex">
          <div class="leThiQuynhNhu font-black">Ngo Le Ngoc Quy</div>
          <div class=" frame40 ml-2">
          <button class="github"> github</button>
          </div>
          </div>
        </div>
        <div className="madeDesignApiQueriesStatistics">
          Made design, api queries, statistics, sprint game, did some layout and supervised development.
        </div>
      </div>
    </div>
    </div>
    <div class='flex items-center justify-center border-solid border-1 rounded-2xl drop-shadow-2xl p-5 bg-white	max-w-4xl	'>
    <div class="image54" style={{ backgroundImage: `url(${abouts3})` }}></div>
    <div class="frame20 flex ">
      <div class="frame18 ml-8">
        <div class="frame23 inline-block">
          <div class=" flex">
          <div class="leThiQuynhNhu font-black">Nguyen Van Tai</div>
          <div class=" frame40 ml-2">
          <button class="github"> github</button>
          </div>
          </div>
        </div>
        <div className="madeDesignApiQueriesStatistics">
          Made design, api queries, statistics, sprint game, did some layout and supervised development.
        </div>
      </div>
    </div>
    </div>
    <div class='flex items-center justify-center border-solid border-1 rounded-2xl drop-shadow-2xl p-5 bg-white	max-w-4xl	'>
    <div class="image54" style={{ backgroundImage: `url(${abouts3})` }}></div>
    <div class="frame20 flex ">
      <div class="frame18 ml-8">
        <div class="frame23 inline-block">
          <div class=" flex">
          <div class="leThiQuynhNhu font-black">Nguyen Vu</div>
          <div class=" frame40 ml-2">
          <button class="github"> github</button>
          </div>
          </div>
        </div>
        <div className="madeDesignApiQueriesStatistics">
          Made design, api queries, statistics, sprint game, did some layout and supervised development.
        </div>
      </div>
    </div>
    </div>
  </div>
  );
};

export default AboutUs;
