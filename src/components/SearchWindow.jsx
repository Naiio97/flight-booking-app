import '../styles/SearchWindow.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const SearchWindow = () => {
  return (
    <>
      <div className="search-container">
        <form className="search-box">
          <TextField
            style={{ marginRight: 20 }}
            id="from-input"
            label="Odkud"
          />
          <TextField
            style={{ marginRight: 20 }}
            className="input"
            id="to-input"
            label="Kam"
          />
          <TextField
            style={{ marginRight: 20 }}
            className="input"
            id="departure-input"
            label="Odlet"
          />

          <Button variant="contained">Vyhledat</Button>
        </form>
      </div>
    </>
  );
};

export default SearchWindow;
