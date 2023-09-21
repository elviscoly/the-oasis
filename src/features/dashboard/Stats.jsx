import { HiOutlineBriefcase, HiOutlineCalendar, HiOutlineChartBar, HiCreditCard } from 'react-icons/hi';
import Stat from './Stat';

function Stats({bookings, confirmedStays}) {
    // 1. Number of bookings
    const numBookings = bookings.length;

    return (
        <>
        <Stat title='Bookings' color='blue' icon={<HiOutlineBriefcase />} value={numBookings} />
       
        <Stat title='Sales' color='green' icon={<HiCreditCard />} value={numBookings} />

        <Stat title='Check ins' color='indigo' icon={<HiOutlineCalendar />} value={numBookings} />

        <Stat title='Occupancy rate' color='yellow' icon={<HiOutlineChartBar />} value={numBookings} />
        </>
    )
}

export default Stats
