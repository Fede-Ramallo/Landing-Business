"use client";
import React, { FC, useCallback } from "react";
import _ from 'lodash';
import { motion } from "framer-motion";
import { ReactSVG } from "react-svg";
import style from "./WhatsappButton.module.css";
import { WhatsappButtonProps } from "@/types/model";

const WhatsappButton: FC<WhatsappButtonProps> = ({ phone, message }) => {
  const handleClick = useCallback(() => {
    const link = !_.isNil(message)
      ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
      : `https://wa.me/${phone}`;
    window.open(link, "_blank");
  }, [message, phone]);

  return (
    <motion.button
      className={style.whatsapp_button}
      onClick={handleClick}
      initial="initial"
      animate="visible"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
      aria-label="Whatsapp Button"
    >
      <ReactSVG wrapper="span" title={"logo"} src="/icons/whatsapp.svg" />
    </motion.button>
  );
};

export default WhatsappButton;
