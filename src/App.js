import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';
import styled from 'styled-components';

const AppBody = styled.div`
    background: rgb(250, 250, 250);
    display: flex;
    align-items: center;
    justify-content: center;
`;


class App extends React.Component {
    state = {
        data: {},
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }


    render() {
        const { data } = this.state;
        return (
            <AppBody>
                <Cards data={data} />
                <CountryPicker />
                <Chart />
            </AppBody>
        )
    }
}

export default App;