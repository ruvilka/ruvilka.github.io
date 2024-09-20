import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';



   

const Tables = () => {
    
    
  const [data, setData] = useState([]);

  const CLIENT_ID = '289015355844-eirtdlbmpchp88bgah4346i9sihtb6tf.apps.googleusercontent.com'; 
  const API_KEY = 'AIzaSyB2VctJfcBIxEBeSzlihjDq9Dg7dLicC_M'; 
  const SPREADSHEET_ID = '1uC8VG_C70lqM5qqVvktvkPJoP2tCC0Zj_vnU9HukJl4'; 
  const RANGE = 'Лист1!A1:F2';

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
        scope: "https://www.googleapis.com/auth/spreadsheets.readonly"
      }).then(() => {
        loadSpreadsheet();
      }).catch(err => {
        console.error('Ошибка инициализации gapi:', err);
      });
    };

    gapi.load("client:auth2", initClient);
  }, []);

  const loadSpreadsheet = () => {
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
    }).then(response => {
      console.log("Данные из таблицы:", response.result.values); // Логируем полученные данные
      setData(response.result.values || []); // Обновляем состояние с проверкой на пустой массив
    }).catch(err => {
      console.error("Ошибка при получении данных: ", err);
    });
  };


//   gapi.client.sheets.spreadsheets.values.get({
//     spreadsheetId: SPREADSHEET_ID,
//     range: RANGE,
// }).then(response => {
//     console.log("Ответ API:", response);
//     const fetchedData = response.result.values;
//     if (fetchedData) {
//         console.log("Полученные данные:", fetchedData);
//         setData(fetchedData); // Установка данных в state
//     } else {
//         console.log("Данные отсутствуют");
//     }
// }).catch(err => {
//     console.error("Ошибка при получении данных:", err);
// });
  
  return (
    <div>
      <h1>Данные из Google Таблицы</h1>
      {data.length > 0 ? (
        <table>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => (
                  <td key={i}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Данные не найдены или отсутствуют.</p>
      )}
    </div>
  );
};

export default Tables;
