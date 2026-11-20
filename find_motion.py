import cv2
import numpy as np

video_path = r"C:\Users\anjal\.gemini\antigravity\brain\f93a603e-4d1b-4172-a233-2643912c2b69\.user_uploaded\media_1795187384024_269ad937.mp4"
cap = cv2.VideoCapture(video_path)
fps = cap.get(cv2.CAP_PROP_FPS)

prev_frame = None
motion_timeline = []

f_idx = 0
while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    if prev_frame is not None:
        diff = cv2.absdiff(prev_frame, gray)
        score = np.mean(diff)
        motion_timeline.append((f_idx, f_idx / fps, score))
    prev_frame = gray
    f_idx += 1

cap.release()

# Find significant motion bursts
high_motion = [m for m in motion_timeline if m[2] > 5.0]
print(f"Total motion events: {len(high_motion)}")
if high_motion:
    print("Top motion segments (seconds):")
    for m in high_motion[::10]:
        print(f"Frame {m[0]}, Time: {m[1]:.2f}s, Score: {m[2]:.2f}")
