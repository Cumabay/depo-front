import { useEffect, useState } from "react";

function MyComponent() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
        console.log('qqqqq');
	// Примечание: пустой массив зависимостей [] означает, что
	// этот useEffect будет запущен один раз
	// аналогично componentDidMount()
	useEffect(() => {
	  fetch("https:3001/localhost/pallets/")
	    .then(res => res.json())
	    .then(
	      (result) => {
		setIsLoaded(true);
		setItems(result);
	      },
	      // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
	      // чтобы не перехватывать исключения из ошибок в самих компонентах.
	      (error) => {
		setIsLoaded(true);
		setError(error);
	      }
	    )
	}, [])
      
	if (error) {
	  return <div>Ошибка: {error.message}</div>;
	} else if (!isLoaded) {
	  return <div>Загрузка...</div>;
	} else {
	  return (
	    <ul>
	      {items.map(item => (
		<li key={item.id}>
		  {item.thickness} {item.length}
		</li>
	      ))}
	    </ul>
	  );
	}
      }

      export default MyComponent;