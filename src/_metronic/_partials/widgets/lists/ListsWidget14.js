/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import './table.css';
const tempData = [
  {
    id: 1,
    image: '',
    name: 'General - Beginner',
    state: 0,
    total: 0,
    total_exam: 0,
    precent: '',
    min: '',
    date: ',',
  },
  {
    id: 2,
    image: '',
    name: 'Intermediate',
    state: 1,
    total: 34,
    total_exam: 12,
    precent: '',
    min: '',
    date: '2021-12-12',
  },
  {
    id: 3,
    image: '',
    name: 'General - Beginner',
    state: 0,
    total: 0,
    total_exam: 0,
    precent: '',
    min: '',
    date: ',',
  },
  {
    id: 4,
    image: '',
    name: 'Intermediate',
    state: 1,
    total: 76,
    total_exam: 12,
    precent: '',
    min: '',
    date: '2021-12-12',
  },
  {
    id: 5,
    image: '',
    name: 0,
    state: 'цээжилж байгаа',
    total: 0,
    total_exam: 0,
    precent: '',
    min: '',
    date: ',',
  },
  {
    id: 6,
    image: '',
    name: 'Intermediate',
    state: 1,
    total: '',
    total_exam: 104,
    precent: '',
    min: '',
    date: '2021-12-12',
  },
  {
    id: 7,
    image: '',
    name: 'General - Beginner',
    state: 0,
    total: 0,
    total_exam: 0,
    precent: 0,
    min: 0,
    date: '',
  },
  {
    id: 8,
    image: '',
    name: 'Intermediate',
    state: 1,
    total: 12,
    total_exam: 12,
    precent: '78%',
    min: '12',
    date: '2021-12-12',
  },

];

export function ListsWidget14({ className }) {
  return (
    <>
    <h3>
    Хэрэглэгчийн статистик
    </h3>
      <table className="myTable" >
        <tr>
          <th>ХЭРЭГЛЭГЧИД</th>
          <th>ТӨЛӨВ</th>
          <th>НИЙТ Ц/ТОО</th>
          <th>ШАЛГАЛТ ӨГСӨН ТОО</th>
          <th>ОНОО</th>
          <th>ХУГАЦАА</th>
          <th>ОН САР</th>
          <th>ҮГСИЙН МЭДЭЭЛЭЛ</th>
        </tr>
        {tempData.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.id} {item.name}</td>
              <td>{item.state}</td>
              <td>{item.total}</td>
              <td>{item.total_exam}</td>
              <td>{item.precent}</td>
              <td>{item.min}</td>
              <td>{item.date}</td>
              <td>Дэлгэрэнгүй харах</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}
