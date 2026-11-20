import cv2
import os

video_path = r"C:\Users\anjal\.gemini\antigravity\brain\f93a603e-4d1b-4172-a233-2643912c2b69\.user_uploaded\media_1795187384024_269ad937.mp4"
output_dir = r"C:\Users\anjal\.gemini\antigravity\brain\f93a603e-4d1b-4172-a233-2643912c2b69\scratch\video_frames"
os.makedirs(output_dir, exist_ok=True)

cap = cv2.VideoCapture(video_path)
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
fps = cap.get(cv2.CAP_PROP_FPS)
duration = total_frames / fps if fps > 0 else 0
print(f"Total frames: {total_frames}, FPS: {fps}, Duration: {duration:.2f}s")

# Extract 10-12 evenly spaced frames
num_samples = 12
step = max(1, total_frames // num_samples)

saved = []
frame_idx = 0
sample_count = 0

while cap.isOpened() and sample_count < num_samples:
    ret, frame = cap.read()
    if not ret:
        break
    if frame_idx % step == 0:
        out_name = f"frame_{sample_count:02d}_t{frame_idx/fps:.2f}s.jpg"
        out_path = os.path.join(output_dir, out_name)
        cv2.imwrite(out_path, frame)
        saved.append(out_path)
        sample_count += 1
    frame_idx += 1

cap.release()
print(f"Saved {len(saved)} frames to {output_dir}")
for s in saved:
    print(s)
