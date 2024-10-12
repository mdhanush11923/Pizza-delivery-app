import HistoryIcon from '@mui/icons-material/History';

export default function Orders()  {

  return (
    <div className="flex w-full h-screen px-20 py-10 gap-4 items-center justify-center bg-dark">
        <div className='flex gap-2'>
          <HistoryIcon />
          <h1>No orders history</h1>
        </div>
    </div>
  );
}