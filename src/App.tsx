import React, { useState } from 'react';
import BarChart from './components/BarChart';

const App: React.FC = () => {
    // const data = {
    //     labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    //     values: [45, 85, 32, 90],
    // };

    const [values, setValues] = useState<string>("");
    const [labels, setLabels] = useState<string>("");

    const [data, setData] = useState({values: [45, 85, 32, 90], labels: ['Jan', 'Feb', 'Mar', 'Apr']});

    return (
        <div className="App">
            <div style={{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={(e)=>{e.preventDefault(); setData({"values": values.split(" ").map((v)=>Number(v)), labels: labels.split(" ")})}}>
                    <input onChange={(e)=>setValues(e.target.value)} type="text" placeholder='values (e.g. 1 2 3 4)' value={values}></input>
                    <input onChange={(e)=>setLabels(e.target.value)} type="text" placeholder='labels (e.g. jan feb mar apr)' value={labels}></input>
                    <button type="submit">Submit</button>
                </form>
                <div style={{marginTop: 10, height: "40%"}}>
                    <BarChart values={data.values} labels={data.labels} />
                </div>
                
              
            </div>
            
        </div>
    );
};

export default App;