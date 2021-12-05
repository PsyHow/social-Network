import React from "react";
import style from "./Paginator.module.css";


export const Paginator = (props: PropsType) => {

    const {
        totalUsersCount,
        pageSize,
        currentPage,
        onPageChanged,
    } = props

    const pagesCount = Math.ceil(totalUsersCount / pageSize)

    const page = []
    for (let i = 1; i <= pagesCount; i++) {
        page.push(i)
    }


    return (
        <div>
            { page.map(m =>
                <span className={ currentPage === m ? style.selectedPage : style.Page }
                      onClick={ () => {onPageChanged(m)} }>
                { m }
            </span>)
            }
        </div>
    )
}

//types
type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}