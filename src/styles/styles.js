
import { devices } from '../utils/devices'
import styled from '@emotion/styled'

export const AppContainer = styled.div`
    width: 70%;
    margin: 0 auto;
    padding-top: 2.5rem;

    @media ${devices.mobileS} {
        width: 100%;
    }
`