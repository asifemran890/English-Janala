const loadlessons = () => {
  fetch(`https://openapi.programming-hero.com/api/levels/all`)
    .then((res) => res.json())
    .then((json) => displaylessons(json.data));
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
    <button href="" class="btn btn-outline btn-primary"> <i class="fa-brands fa-leanpub"></i>Lessons- ${lesson.level_no}</button >`;
    levelContainer.append(btnDiv);
  }
};
loadlessons();
