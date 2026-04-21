'use client';
import { green, red } from '../lib/theme/customizations/themePrimitives';
import React, { useState, useEffect } from 'react';
import { RequestStats } from './RequestStats';
import { PrayerRequestCards } from './PrayerRequestCards'
import {
  Box,
  Typography,
  CircularProgress,
  Stack,
  Card,
  CardContent,
  Button,
  IconButton,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
} from '@mui/material';
import {
  Edit as EditIcon,
  ExpandMore as ExpandMoreIcon,
  DeleteOutline as DeleteIcon,
} from '@mui/icons-material';

function MyPrayerRequests() {
  const [loading, setLoading] = useState(true);
  const [prayers, setPrayers] = useState([]);
  const [activeStatus, setActiveStatus] = useState('all');
  const [editOpen, setEditOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedPrayer, setSelectedPrayer] = useState(null);

  useEffect(() => {
    if (selectedPrayer) {
      console.log('State updated: current selectedPrayer is', selectedPrayer.title);
    }
  }, [selectedPrayer]);

    return(
      <PrayerRequestCards 
      activeStatus={activeStatus} 
      type='user'
       />
    );
}

export default MyPrayerRequests;
