const loadlessons = () => {
  fetch`https://openapi.programming-hero.com/api/levels/all`
    .then((res) => res.json())
    .then((json) => displaylessons(json.data));
};

const lodeLevelWord = (id) => {
  // console.log("lodeLevelWord");
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLevelWord(data.data));

  const displayLevelWord = (words) => {
    const wordcontainer = document.getElementById("word_container");
    wordcontainer.innerHTML = "";
    if (words.length == 0) {
      wordcontainer.innerHTML = `
      <div class="text-center rounded-xl py-10 space-y-6 col-span-full">
        <img class="mx-auto" src="./assets/alert-error.png" alt="" />
        <p class="text-xl font-semibold text-gray-400">
          এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
        </p>
        <h2 class="font-bold text-4xl font-bangla">নেক্সট Lesson এ যান</h2>
      </div>
      `;
      return;
    }

    words.forEach((word) => {
      console.log(words);
      const card = document.createElement("div");
      card.innerHTML = `
     <div class="bg-white rounded-xl shadow-sm text-center py-20 px-5">
            <h1 class="font-bold text-2xl">${
              word.word ? word.word : "শব্দ পাওয়া যায়নি"
            }</h1>
            <p class="font-semibold p-5">${
              word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি"
            } /${
        word.pronunciation ? word.pronunciation : "pronunciatio পাওয়া যায়নি"
      }</p>
            <div class="text-2xl font-medium fond-bangla">
              "দ্বিধা করা / হেজিটেট"
            </div>
            <div class="flex items-center justify-between">
              <button class="btn bg-[#1A91FF1A] hover:bg-sky-500">
                <i class="fa-solid fa-circle-info"></i>
              </button>
              <button class="btn bg-[#1A91FF1A] hover:bg-sky-500">
                <i class="fa-solid fa-volume-high"></i>
              </button>
            </div>
          </div>

        `;
      wordcontainer.append(card);
    });
  };
};

const displaylessons = (lessons) => {
  //1. get to container & empty
  const levelContainer = document.getElementById("level_container");
  levelContainer.innerHTML = "";
  //2. get into evey lessons
  for (let lesson of lessons) {
    //3. create element
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
    <button onclick ="lodeLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary"> <i class="fa-brands fa-leanpub"></i>Lessons- ${lesson.level_no}</button >`;
    levelContainer.append(btnDiv);
  }
};
loadlessons();
