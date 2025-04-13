# Replace Placeholder Images with Actual Workout Program Images

The current SVG placeholders need to be replaced with the actual workout program images. 

## Images to Replace

1. **ppl-split.svg** → Replace with the image showing a man performing a barbell exercise with "PUSH PULL LEGS" text on the wall behind him.

2. **arnold-split.svg** → Replace with the image showing a man performing dumbbell curls with "ARNOLD SPLIT" text on the wall behind him.

3. **upper-lower-split.svg** → Replace with the image showing a man using a cable machine with "UPPER/LOWER" text on the wall behind him.

4. **bro-split.svg** → Replace with the image showing a man with a barbell on his shoulders with "BRO SPLIT" text on the wall behind him.

5. **full-body-split.svg** → Replace with the image showing a man with a barbell on his shoulders with "FULL BODY" text on the wall behind him.

## How to Replace

1. Save each image from the conversation with the matching filename, but use the .jpg extension:
   - ppl-split.jpg
   - arnold-split.jpg
   - upper-lower-split.jpg
   - bro-split.jpg
   - full-body-split.jpg

2. Place all these .jpg files in this directory (`frontend/public/images/`).

3. Update the image paths in the following files to use .jpg instead of .svg:
   - `frontend/src/pages/workout-plans/WorkoutPlans.jsx`
   - `frontend/src/pages/workout-plans/WorkoutPlanDetails.jsx`

   Simply change:
   ```
   image: "/images/ppl-split.svg"
   ```
   to:
   ```
   image: "/images/ppl-split.jpg"
   ```
   (and do the same for all 5 images)

After making these changes, the website will display the actual workout program images instead of the placeholder SVGs. 