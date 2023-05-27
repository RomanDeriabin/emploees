import './app-info.css';

const AppInfo = (props) => {
  const {data} = props;
  const newArr = data.filter((item) => {
    return item.increase === true;
  })
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании  N</h1>
      <h2>Общее число сотрудников: {data.length}</h2>
      <h2>Премию получат: {newArr.length}</h2>
    </div>
  );
}

export default AppInfo;