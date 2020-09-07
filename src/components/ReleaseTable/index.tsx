import React,{ useState, useEffect } from 'react';
import { ReleaseData } from '../../hooks/useReleaseHistory';

import List from './components/List';
import SelectBox from './components/SelectBox';

interface Props {
  releases: ReleaseData[];
}

const ReleaseTable = ({ releases }: Props): JSX.Element => {
  const [items, setItems] = useState<ReleaseData[]>([]); 
  const [type,setType] = useState<string>('Date');
  const [desc,setDesc] = useState<boolean>(true);
  

  useEffect(():void => {
    setItems(releases);
  },[releases]);

  useEffect(():void => {
    sorting();
  },[type,desc]);

  function sorting():void {
    const newItems = items.slice();
    setItems(newItems.sort(dateSort));
  }

  function dateSort(a: ReleaseData,b: ReleaseData):number {
    return -1;
  };

  return (
    <div className="overflow-horizontal-scroll">
      <SelectBox type={type} desc={desc} updateType={setType} updateDesc={setDesc} />
      <table>
        <thead>
          <tr>
            <th>Version</th>
            <th>LTS</th>
            <th>Date</th>
            <th>V8</th>
            <th>NPM</th>
            <th>ABI</th>
            <th>SHASUM</th>
          </tr>
        </thead>
        <List releases={items}/>
      </table>
    </div>
  );
};

export default ReleaseTable;
