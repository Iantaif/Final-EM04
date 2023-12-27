export default function FormUser() {
  return (
    <div className="container mx-auto pt-5 pb-20">
      <div class="max-w-md mx-auto pt-5 pb-10"> 
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-700 from-sky-500 whitespace-nowrap">
           User Information
          </span>
        </h1>
       
      </div>
      <form class="max-w-md mx-auto">
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="User_name"
            id="User_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="User_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Họ Và Tên
          </label>
        </div>

        <div class="relative z-0 w-full mb-5 group">
          <input
            type="date"
            name="date"
            id="date"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="DD-MM-YYYY "
            required
          />
          <label
            for="date"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          ></label>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="floating_phone"
              id="floating_phone"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_phone"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Số điện thoại
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <label class="block text-sm text-gray-500 dark:text-gray-400">
              Giới tính
            </label>

            <input
              type="radio"
              name="gender"
              id="male"
              class="mr-2"
              value="Nam"
              required
            />
            <label for="male">Nam</label>

            <input
              type="radio"
              name="gender"
              id="female"
              class="mr-2"
              value="Nữ"
              required
            />
            <label for="female">Nữ</label>
            <input
              type="radio"
              name="gender"
              id="Other"
              class="mr-2"
              value="Other"
              required
            />
            <label for="female">Khác</label>
          </div>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <select
            name="status"
            id="status"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          >
            <option value="" disabled selected hidden>
              Trình độ
            </option>
            <option value="Học sinh">Học sinh</option>
            <option value="Sinh viên">Sinh viên</option>
            <option value="Người đã đi làm">Người đã đi làm</option>
          </select>
        </div>

        <button
          type="submit"
          class="text-white bg-blue-500 duration-200 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 pt-2"
        >
          Hoàn thành
        </button>
      </form>
    </div>
  );
}
