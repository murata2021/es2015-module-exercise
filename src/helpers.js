
const choice=(items)=>{
    const randomNum=Math.floor(Math.random()*items.length)
    const randomChoice=items[randomNum]
    return (
        randomChoice
    )

}

const remove=(items,item)=>{


    const index = items.indexOf(item);
    if (index > -1) {
        return items.splice(index, 1); // 2nd parameter means remove one item only
    }
}


export { choice, remove };
