import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { getLocalStorage } from '../../utils/LocalStorage';
import Left from './Left';
import Right from './Right';
import Story from './Story';
import Messages from './Messages';
import { Search, Compass, House, SquarePlay, MessageCircle, Heart, SquarePlus, EllipsisVertical, Blocks } from 'lucide-react';

const Main = () => {
  const [userdata] = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (storedUser) setUser(storedUser);
    const usersFromLocal = getLocalStorage();
    setAllUsers(usersFromLocal);
  }, []);

  return (
    <div className="bg-black text-white flex justify-between min-h-screen overflow-x-hidden">
      
      <div className="fixed top-0 left-0 h-full w-16 md:w-64 z-50 hidden sm:block">
        <Left data={userdata} />
      </div>
      <div className="flex-1 mx-auto w-full sm:max-w-lg mt-5 overflow-y-auto pb-20 sm:pb-16 md:ml-64 lg:mr-80 border-none">
        <Story data={allUsers} />
      </div>
      <div className="fixed top-8 right-4 w-64 hidden lg:block z-40">
        <Right data={userdata ? userdata[0] : null} />
      </div>
      <div className="fixed bottom-4 right-4 z-50 sm:block hidden">
        <Messages />
      </div>
      
      <div className="sm:hidden fixed bottom-0 left-0 w-full bg-black border-t border-gray-800 flex justify-around items-center py-3 z-50">
        <House className="text-white w-7 h-7" />
        <Search className="text-white w-7 h-7" />
        <SquarePlus className="text-white w-7 h-7" />
        <SquarePlay className="text-white w-7 h-7" />
        <MessageCircle className="text-white w-7 h-7" />
      </div>
    </div>
  );
};

export default Main;