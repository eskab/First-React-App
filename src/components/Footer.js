import React, { PropTypes } from 'react';

import TodoFilterButton from '../containers/TodoFilterButton';
import MarkAllButton from '../containers/MarkAllButton';
import DeleteMarkedButton from '../containers/DeleteMarkedButton';

const Footer = () => (
  <footer>
    <TodoFilterButton text="All" filter="ALL" />
    <TodoFilterButton text="Active" filter="ACTIVE" />
    <TodoFilterButton text="Completed" filter="COMPLETED" />
    <MarkAllButton text="Mark all" />
    <DeleteMarkedButton text="Delete marked" />
  </footer>
);

export default Footer;