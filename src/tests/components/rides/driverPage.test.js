import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount, shallow } from 'enzyme';
import DriverPage from '../../../components/driver/driverPage';
import RideSelectForm from '../../../components/rides/rideSelectForm';
import { AllRidesTableTest } from '../../../components/table/allRidesTable';
import { TablePaginationViewTest } from '../../../components/table/pagination/tablePaginationView';
import TablePaginationViewActions
	from '../../../components/table/pagination/tablePaginationViewActions';
import ViewRequestsTab, { ViewRequestsTabTest } from '../../../containers/driver/viewRequestsTab';

const mockStore = configureStore([thunk]);
let store;

describe('DriverPage component', () => {

	beforeEach(() => {
		store = mockStore({
			ridesReducer: {
				newRide: {},
				rideSelections: [],
				rides: [],
				requests: [],
				summary: {
					ridesTaken: 0,
					ridesGiven: 0
				}
			}
		});
	});

	it('renders driver page form without crashing', () => {
		const wrapper = shallow(
			<MemoryRouter>
				<DriverPage
					handleClickShowPassword={jest.fn}
					showPassword
					onChange={jest.fn}
					formHasError={() => true}
					onSubmit={jest.fn}
				/>
			</MemoryRouter>
		);
		expect(wrapper).toHaveLength(1);
		// expect(wrapper.dive().find(addRideForm)).toHaveLength(1);
	});

	it('should render all driver views without crashing', () => {
		expect(mount(
			<MemoryRouter>
				<Provider store={store}>
					<DriverPage
						tripFrom=""
						tripDepartTime=""
						tripDestination=""
						tripCost=""
						onChange={jest.fn}
						errors={{}}
						onSubmit={jest.fn}
						formHasError={() => true}
						classes={{}}
					/>
				</Provider>
			</MemoryRouter>
		)).toHaveLength(1);
	});

	it('should mount all ide tables without crashing', () => {
		mount(<AllRidesTableTest
			classes={{}}
			rows={[{ category: 'hgj', status: 'taken' }, {}, {}]}
			ridesTaken={0}
			rowsPerPage={1}
			handleChangeRowsPerPage={jest.fn}
			handleChangePage={jest.fn}
			page={2}
			onClickDelete={jest.fn}
			ridesGiven={0}
		/>);
	});

	it('should mount all ide table pagination without crashing', () => {
		const wrapper = shallow(<TablePaginationViewActions
			page={1}
			rowsPerPage={3}
			count={23}
			onChangePage={jest.fn}
		/>);
		wrapper.instance().handleFirstPageButtonClick({});
		wrapper.instance().handleBackButtonClick({});
		wrapper.instance().handleNextButtonClick({});
		wrapper.instance().handleLastPageButtonClick({});
	});

	it('should mount all ride table pagination view without crashing', () => {
		expect(shallow(<TablePaginationViewTest
			page={1}
			rowsPerPage={3}
			count={23}
			classes={{}}
			handleNextButtonClick={jest.fn}
			handleLastPageButtonClick={jest.fn}
			handleFirstPageButtonClick={jest.fn}
			handleBackButtonClick={jest.fn}
			onChangePage={jest.fn}
			theme={{ direction: 'rtl' }}
		/>)).toHaveLength(1);
	});

	it('should mount all ride requests view without crashing', () => {
		expect(mount(<RideSelectForm onSelectRide={jest.fn} selectValue="" rows={[{ category: 'ere' }]} />)).toHaveLength(1);
	});

	it('should mount all ide table pagination view without crashing', () => {

		let wrapper = mount(
			<ViewRequestsTab
				store={store}
				rows={[{ category: 'sd' }, { rideId: 'wef' }]}
				totalRequests={0}
				dispatch={jest.fn}
				rides={[{}]}
			/>
		);

		wrapper = shallow(
			<ViewRequestsTabTest
				rows={[{ category: 'sd' }, { rideId: 'wef' }]}
				dispatch={jest.fn}
				rides={[{}]}
			/>
		);

		expect(wrapper).toHaveLength(1);
		wrapper.setProps({});
		wrapper.instance().onSelectRide({ target: { value: '' } });
		wrapper.instance().handleChangePage({ target: { value: '' } }, 2);
		wrapper.instance().handleChangeRowsPerPage({ target: { value: '' } }, 2);
		wrapper.instance().onClickRequest(2, 3, 'sdfg')({ preventDefault: jest.fn });
	});

});
