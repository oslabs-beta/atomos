import React from 'react';

export default [
  {
    id: '1',
    type: 'input',
    data: { label: 'App' },
    position: { x: 250, y: 0 },
  },
  {
    id: '2',
    data: { label: 'Main Container' },
    position: { x: 250, y: 100 },
  },
  {
    id: '3',
    data: { label: 'Head' },
    position: { x: 0, y: 200 },
    style: {
      width: 180,
    },
  },
  {
    id: '4',
    position: { x: 250, y: 200 },
    data: { label: 'Body' },
  },
  {
    id: '5',
    position: { x: 500, y: 200 },
    data: { label: 'Foot' },
  },
  {
    id: '6',
    type: 'output',
    data: { label: 'Logo' },
    position: { x: -100, y: 300 },
    style: {
      width: 100,
      border: '1px solid #1a192b',
    },
  },
  {
    id: '7',
    type: 'output',
    position: { x: 50, y: 300 },
    data: { label: 'Date Box' },
    style: {
      width: 100,
      border: '1px solid #1a192b',
    },
  },
  {
    id: '8',
    type: 'output',
    position: { x: 200, y: 300 },
    data: { label: 'Main Article' },
    style: {
      width: 100,
      border: '1px solid #1a192b',
    },
  },
  {
    id: '9',
    type: 'output',
    position: { x: 350, y: 300 },
    data: { label: 'Top Stories' },
    style: {
      width: 100,
      border: '1px solid #1a192b',
    },
  },
  {
    id: '10',
    type: 'output',
    data: { label: 'Contact Info' },
    position: { x: 500, y: 300 },
    style: {
      width: 100,
      border: '1px solid #1a192b',
    },
  },
  {
    id: '11',
    type: 'output',
    data: { label: 'Share Story' },
    position: { x: 650, y: 300 },
    style: {
      width: 100,
      border: '1px solid #1a192b',
    },
  },
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e2-5', source: '2', target: '5' },
  { id: 'e3-6', source: '3', target: '6' },
  { id: 'e3-7', source: '3', target: '7' },
  { id: 'e4-8', source: '4', target: '8' },
  { id: 'e4-9', source: '4', target: '9' },
  { id: 'e5-10', source: '5', target: '10' },
  { id: 'e5-11', source: '5', target: '11' },

  // {
  //   id: 'e4-5',
  //   source: '4',
  //   target: '5',
  //   arrowHeadType: 'arrowclosed',
  //   label: 'edge with arrow head',
  // },

  // {
  //   id: 'e5-7',
  //   source: '5',
  //   target: '7',
  //   type: 'step',
  //   style: { stroke: '#f6ab6c' },
  //   label: 'a step edge',
  //   animated: true,
  //   labelStyle: { fill: '#f6ab6c', fontWeight: 700 },
  // },
];
