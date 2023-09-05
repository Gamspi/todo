import React, {memo} from 'react';
import './App.scss';
import CoreLayout from "./layout/appLayout/AppLayout";
import Provider from "./store";


const  App = () => (
    <Provider>
        <CoreLayout/>
    </Provider>

)

export default memo(App);
