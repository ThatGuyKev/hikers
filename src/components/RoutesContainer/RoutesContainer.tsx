import React from 'react';
import RouteCard from 'components/RouteCard';
import {RoutesWrapper} from './RoutesContainer.style';

const RoutesContainer: React.FC = () => {
  const routes = [
    {
      id: 'route-1',
      title: 'Kool Title',
      image: {
        uri:
          'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSgBnU52fOACUTd-QJi7wAJ8hyDtIrmo__M0cH1adQlx8uPhD-b4vm0hJAuiJWAdfvDifPEWmnKH-_NDYOfAoE',
      },
      desc: 'Proper Description',
      duration: 25,
      difficulty: 'Hard',
    },
    {
      id: 'route-2',
      title: 'This is an Awesome Route',
      image: {
        uri:
          'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTF_GwRCR3hkCfsSgbS_3hrYBR1Q6Ez2gfVctwhirWBHRhSWjjQePBcejmxqnTsIc9cDjFi-7jjv5iS1VSS9Nc',
      },
      desc: 'string pfdsf jfpadf',
      duration: 2,
      difficulty: 'Easy',
    },
    {
      id: 'route-1',
      title: 'Kool Title',
      image: {
        uri:
          'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSgBnU52fOACUTd-QJi7wAJ8hyDtIrmo__M0cH1adQlx8uPhD-b4vm0hJAuiJWAdfvDifPEWmnKH-_NDYOfAoE',
      },
      desc: 'Proper Description',
      duration: 25,
      difficulty: 'Medium',
    },
    {
      id: 'route-1',
      title: 'Kool Title',
      image: {
        uri:
          'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSgBnU52fOACUTd-QJi7wAJ8hyDtIrmo__M0cH1adQlx8uPhD-b4vm0hJAuiJWAdfvDifPEWmnKH-_NDYOfAoE',
      },
      desc: 'Proper Description',
      duration: 25,
      difficulty: 'Hard',
    },
    {
      id: 'route-2',
      title: 'This is an Awesome Route',
      image: {
        uri:
          'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTF_GwRCR3hkCfsSgbS_3hrYBR1Q6Ez2gfVctwhirWBHRhSWjjQePBcejmxqnTsIc9cDjFi-7jjv5iS1VSS9Nc',
      },
      desc: 'string pfdsf jfpadf',
      duration: 2,
      difficulty: 'Easy',
    },
    {
      id: 'route-1',
      title: 'Kool Title',
      image: {
        uri:
          'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSgBnU52fOACUTd-QJi7wAJ8hyDtIrmo__M0cH1adQlx8uPhD-b4vm0hJAuiJWAdfvDifPEWmnKH-_NDYOfAoE',
      },
      desc: 'Proper Description',
      duration: 25,
      difficulty: 'Medium',
    },
  ];

  return (
    <RoutesWrapper>
      {routes?.map((route) => (
        <RouteCard route={route} />
      ))}
    </RoutesWrapper>
  );
};

export default RoutesContainer;
