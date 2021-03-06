import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../actions';
import './Pagination.css'


export default function Pagination({recipes, next}) {
  const pageNumbers      = []
  const itemsPerPage     = useSelector(state => state.itemsPerPage)
  const currentPage     = useSelector(state => state.currentPage)


  

  
  const dispatch = useDispatch()
  const total = recipes.length
  for(let i = 1; i<=Math.ceil(total/itemsPerPage);i++){
    pageNumbers.push(i)
  }

  useEffect(()=>{
    let len = pageNumbers.length
    if(len<currentPage){
      if(len ===0) len=1;
      dispatch(changePage(len))
    }
  })

  const toTop=(number)=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
    dispatch(changePage(number))
  }



  return (
    <div class="pagination">
    
      {pageNumbers.map((number) => (
        <input
          class="avgbutton"
          type="button"
          key={number}
          onClick={() => toTop(number)}
          value={number}
        ></input>
      ))}
    </div>
  );
};