import { useEffect, useState } from "react";

/* selbst geschrieben - Fazit: funktioniert, ist aber wenig sinnvoll, 
da der array so nur ein einziges Mal gefiltert werden kann daher in der Form relativ sinnlos für einen state... */

const useFilterItem = (initialArray, itemId) => {
  const [array, setState] = useState(initialArray);
  
  useEffect(() => {
    filterItemFromArray();
  }, [])

  const filterItemFromArray = () => setState((array) => {
    return array.filter(item => item.id === itemId)
  });

  return [array, filterItemFromArray];
};

export default useFilterItem;


//Ein Versuch, den Ursprungs-Array auch nach der ersten Verwendung beizubehalten:

/* const useFilterItem = (initialCard, initialArray, itemId) => {
  const [filteredCard, array, setState] = useState(initialCard, initialArray);
  
  useEffect(() => {
    filterItemFromArray();
  }, [])

  const filterItemFromArray = () => setState((array) => {
    return array.filter(item => item.id === itemId)
  });

  return [filteredCard, array, filterItemFromArray];
};

export default useFilterItem; */