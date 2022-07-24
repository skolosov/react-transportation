import SplitPanelsContainer from '../../components/SplitPanels/SplitPanelsContainer';
import Flex from '../../components/Flex/Flex';
import { ApplicationsPage } from '../ApplicationsPage/ApplicationsPage';
import { MapPage } from '../MapPage/MapPage';
import styled from 'styled-components';

const SContainer = styled(Flex).attrs({
    grow: 1,
    direction: 'column',
})`
    height: inherit;
    width: inherit;
`;

export const HomePage = () => {
    return (
        <SContainer>
            <SplitPanelsContainer
                sizes={[50, 50]}
                splitDirection="horizontal"
                splitMode="Split"
            >
                <ApplicationsPage />
                <MapPage />
            </SplitPanelsContainer>
        </SContainer>

    );
};