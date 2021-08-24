export function showMenu(event,element){
    element.classList.toggle("nav-active");
    event.target.classList.toggle("fa-times-circle");
    event.target.classList.toggle("fa-bars");
}