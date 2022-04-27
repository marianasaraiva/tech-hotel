export const roomFilter = (rooms, setSelectRooms) => {
  const typeRooms = [...new Set(rooms.map(({ type }) => type ))];

  const availableRooms = rooms
    .filter(e => typeRooms
    .includes(e.type) && e.reservations.length === 0);

  const setRooms = new Set();

  const filter = availableRooms.filter((room) => {
    const duplicatedRoom = setRooms.has(room.type);
    setRooms.add(room.type);
    return !duplicatedRoom;
  });

  setSelectRooms(filter);
};
