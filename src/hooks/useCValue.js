import { Box, useToast } from 'native-base'
import React, { useState } from 'react'
import { CValue } from '../core/apiATEM'

export const useCValue = () => {
  const [isLoading, setIslLoading] = useState(false)
  const toast = useToast()

  const errorToast = (text = '') => {
    toast.show({
      placement: "top",
      render: () => {
        return <Box bg='red.400' px="2" py="1" rounded="sm" mb={5} >
            {text}
          </Box>;
      }
    });
  }

  const extractTerms = async (corpus = '') => {
    if(corpus.length === 0 || corpus.length > 1000){
      errorToast('The text must be minor than 1000 and major than 0 charset')
      return false
    }
    setIslLoading(true)
    const resp = await CValue(corpus)
    setIslLoading(false)
    return resp
  }

  return { isLoading, extractTerms }
}
