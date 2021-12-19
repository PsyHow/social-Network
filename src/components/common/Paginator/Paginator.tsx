import React, { useState } from "react";
import style from "./Paginator.module.css";


export const Paginator = (props: PropsType) => {

    const {
        totalItemsCount,
        pageSize,
        currentPage,
        onPageChanged,
    } = props

    const [portionNumber, setPortionNumber] = useState<number>(1)

    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)

    }
    const portionSize = 10
    const portionCount = Math.ceil(pagesCount / portionSize)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize


    return (
        <div className={style.paginator}>
            {portionNumber > 1 &&
            <button onClick={() => {setPortionNumber(portionNumber - 1)}}>Left</button>}
            { pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(m =>
                <span className={ currentPage === m ? style.selectedPage : style.pageNumber }
                      onClick={ () => {onPageChanged(m)} }>
                { m }
            </span>)
            }

            { portionCount > portionNumber &&
            <button onClick={()=> {setPortionNumber(portionNumber + 1)}}>Right</button>}
        </div>
    )
}

//types
type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}