# CBSE Result Page Revamp

## Overview
While using the CBSE website, I noticed that checking results is not very straightforward, especially for first-time users. There are multiple links and no clear direction on what to do next.

So, I redesigned the result checking flow to make it simpler, more guided, and easier to use.

## Problems I Observed

- Too many result links on the page, which creates confusion  
- No clear step-by-step flow for users  
- Form fields are not well explained  
- Error handling is poor (not very user-friendly)  
- The overall experience feels cluttered, especially on mobile  

## What I Changed

Instead of directly showing everything at once, I broke the process into clear steps:

1. Select Class (10th / 12th)  
2. Enter Required Details  
3. View Result  

I also made the following improvements:

- Added proper input labels and validation  
- Included a simple captcha to simulate real usage  
- Replaced alert-based errors with inline messages  
- Structured the result in a readable format (subject-wise marks)  
- Made the layout responsive for smaller screens  

## Before vs After

### Before
- Multiple confusing links  
- No guidance on what to do  
- Basic and unclear form feedback  
- Hard to navigate for new users  

### After
- Simple 3-step flow  
- Clear actions at each step  
- Better validation and feedback  
- Cleaner and more focused layout  

## Tech Used
- HTML  
- CSS  
- JavaScript  

## How to Run
Just open `index.html` in any browser.
