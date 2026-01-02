import torch
import torch.nn as nn
import torch.nn.functional as F

# --- Convolutional Block Definitions ---

class Block1(nn.Module):
    def __init__(self):
        super(Block1, self).__init__()
        self.weight = nn.Parameter(torch.randn(32, 1, 3, 3))
        self.bias = nn.Parameter(torch.zeros(32))
        self.bn = nn.BatchNorm2d(32)
        self.pool = nn.MaxPool2d(2)
        self.dropout = nn.Dropout(0.1)

    def forward(self, x):
        x = F.conv2d(x, self.weight, self.bias, stride=1, padding=1)
        x = self.bn(x)
        x = F.leaky_relu(x)
        x = self.pool(x)
        x = self.dropout(x)
        return x

class Block2(nn.Module):
    def __init__(self):
        super(Block2, self).__init__()
        self.weight = nn.Parameter(torch.randn(64, 32, 3, 3))
        self.bias = nn.Parameter(torch.zeros(64))
        self.bn = nn.BatchNorm2d(64)
        self.pool = nn.MaxPool2d(2)
        self.dropout = nn.Dropout(0.15)

    def forward(self, x):
        x = F.conv2d(x, self.weight, self.bias, stride=1, padding=1)
        x = self.bn(x)
        x = F.leaky_relu(x)
        x = self.pool(x)
        x = self.dropout(x)
        return x

class Block3(nn.Module):
    def __init__(self):
        super(Block3, self).__init__()
        self.weight = nn.Parameter(torch.randn(128, 64, 3, 3))
        self.bias = nn.Parameter(torch.zeros(128))
        self.bn = nn.BatchNorm2d(128)
        self.pool = nn.MaxPool2d(2)
        self.dropout = nn.Dropout(0.2)

    def forward(self, x):
        x = F.conv2d(x, self.weight, self.bias, stride=1, padding=1)
        x = self.bn(x)
        x = F.leaky_relu(x)
        x = self.pool(x)
        x = self.dropout(x)
        return x

class Block4(nn.Module):
    def __init__(self):
        super(Block4, self).__init__()
        self.weight = nn.Parameter(torch.randn(256, 128, 3, 3))
        self.bias = nn.Parameter(torch.zeros(256))
        self.bn = nn.BatchNorm2d(256)
        self.dropout = nn.Dropout(0.25)

    def forward(self, x):
        x = F.conv2d(x, self.weight, self.bias, stride=1, padding=1)
        x = self.bn(x)
        x = F.leaky_relu(x)
        x = self.dropout(x)
        return x

# --- Main Model Architecture ---

class AHCNN(nn.Module):
    def __init__(self, num_classes=237):
        super().__init__()
        self.block1 = Block1()
        self.block2 = Block2()
        self.block3 = Block3()
        self.block4 = Block4()
        self.gap = nn.AdaptiveAvgPool2d(1)
        self.classifier = nn.Linear(256, num_classes)

    def forward(self, x):
        x = self.block1(x)
        x = self.block2(x)
        x = self.block3(x)
        x = self.block4(x)
        x = self.gap(x)
        x = x.view(x.size(0), -1)
        x = self.classifier(x)
        return x
