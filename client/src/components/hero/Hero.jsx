import "./hero.scss";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { BsMusicNote, BsMusicNoteBeamed } from "react-icons/bs";
import { HiHashtag } from "react-icons/hi";
import { SlMusicTone } from "react-icons/sl";
import { GiMusicalNotes } from "react-icons/gi";

const Hero = () => {
  return (
    <div className="hero">
      <div class="music-notes">
        <div class="note-1">
          <BsMusicNoteBeamed /> <BsMusicNote />
        </div>
        <div class="note-2">
          <BsMusicNote />
        </div>
        <div class="note-3">
          <HiHashtag /> <SlMusicTone />
        </div>
        <div class="note-4">
          <GiMusicalNotes />
        </div>
      </div>
      <div className="mask">
        <img className="hero-img" src="assets/thumb.png" alt="" />
        <div className="left"></div>
      </div>
      <div className="right">
        <div className="content">
          <h1>SynthEd.</h1>

          <h3>
            Music to
            <div className="word-scroll">
              <div className="hero-wrapper">
                <div className="hero-item">Learn</div>
                <div className="hero-item">Create</div>
                <div className="hero-item">Play</div>
                <div className="hero-item">Share</div>
              </div>
            </div>
          </h3>

          <div className="heroBtns">
            <Link to="/register" className="btn">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
