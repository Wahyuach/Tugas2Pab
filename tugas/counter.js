const Counter= () => {
    const [hitung, setHitung] = React.useState(0);
    const tambah = () => {
        setHitung(hitung + 1);
    };

    const kurang = () => {
        setHitung(hitung - 1);
    };


    
        return (
           
                <div>
                    <h1>Hitung</h1>
                    <h3>Jumlah:
                        {hitung}</h3>
                    <button onClick={tambah}>+1</button>
                    <button onClick={kurang}>-1</button>
                </div>
          
        );
    
   
};

const Deploy= () => {
    return (
        <div>
            <Counter/>
        </div>
    );
};


ReactDOM.render(<Deploy/>,
    document.getElementById('root'));